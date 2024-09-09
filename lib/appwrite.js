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
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    Alert.alert("Sign in Error ", error.message);
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
      config.videoCollectionId,
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
      [Query.equal("assigned-to", userId), Query.orderDesc("$createdAt")]
    );

    return posts.documents;
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