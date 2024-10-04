import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
  Storage,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.nathan.ktu-it-complaint-apple",
  projectId: "66c99f0e003dcf768608",
  databaseId: "66d3d5790038149d0aaf",
  usersCollectionId: "66d599c2003768fa5856",
  complaintsId: "66d59c760010ad149443",
  storageId: "66d619d80015cd0dec56",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
//
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get(); // get the current account that is in session(currently logged in)
    console.log("trying to find  a session ", currentAccount);
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

//
export const signOut = async () => {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.log("sign in error-> ", error);
  }
};

export const addComplaint = async (form) => {
  // Add complaint logic
  const result = await databases.createDocument(
    config.databaseId, // databaseId
    config.complaintsId, // collectionId
    ID.unique(), // documentId
    {
      complainer: form.userId,
      contact: form.phone,
      department_name: form.department_name,
      job_type: form.jobType,
      description: form.description,
      office_number: form.office,
    } // data
  );
};

// Fetch all complaints for admin
export const getAllCompaints = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.complaintsId,
      [Query.orderDesc("$createdAt")]
    );

    return posts.documents;
  } catch (error) {
    console.log(error);
  }
};

// Fetch all complaints for a specific staff
export const getStaffComplaints = async (userId) => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.complaintsId,
      [Query.equal("complainer", userId), Query.orderDesc("$createdAt")]
    );

    return posts.documents;
  } catch (error) {
    console.log(error);
  }
};

// Fetch all complaints for a specific Engineer
export const getAssignedToComplaints = async (userId) => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.complaintsId,
      [Query.equal("assigned_to", userId), Query.orderDesc("$createdAt")]
    );

    return posts.documents;
  } catch (error) {
    console.log(error);
  }
};

// fetch specific complaint information
export const getComplaint = async (complaintId) => {
  try {
    const complaint = await databases.getDocument(
      config.databaseId,
      config.complaintsId,
      complaintId
    );

    console.log("from appwrite", complaint);
    return complaint;
  } catch (error) {
    console.log(error);
  }
};

// update compliant status
export const updateStatusComplaint = async (complaintId) => {
  try {
    const complaint = await databases.updateDocument(
      config.databaseId,
      config.complaintsId,
      complaintId,
      {
        status: "done",
      }
    );

    return complaint;
  } catch (error) {
    console.log(error);
  }
};

// Assign Complaint to engineer
export const assignComplaint = async (complaintId, engineerId) => {
  try {
    const complaint = await databases.updateDocument(
      config.databaseId,
      config.complaintsId,
      complaintId,
      {
        assigned_to: engineerId,
        assigned: true,
      }
    );

    return complaint;
  } catch (error) {
    console.log(error);
  }
};

// Fetch all users from the database
export const getAllUsers = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.orderDesc("$createdAt")]
    );

    return posts.documents;
  } catch (error) {
    console.log(error);
  }
};

// fetch engineers
export const getEngineers = async () => {
  try {
    const engineers = await databases.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.equal("role", "Engineer"), Query.orderDesc("$createdAt")]
    );

    return engineers.documents;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (userId) => {
  try {
    const user = await databases.getDocument(
      config.databaseId,
      config.usersCollectionId,
      userId
    );

    console.log("from appwrite", user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (password) => {
  console.log(password);
  try {
    const result = await account.updatePassword(
      password.new, // password
      password.old // old password
    );

    console.log("Password updated successfully -> ", result);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
