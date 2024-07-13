import {Carousel, Constants, Text, View, Colors} from 'react-native-ui-lib';
import React, {useState, useRef} from 'react';
import {StyleSheet, Animated, TextStyle} from 'react-native';
import _ from 'lodash';
import LinearGradientWrapper from '@/components/shared/LinearGradientWrapper';

const BACKGROUND_COLORS = [
  Colors.white,
  Colors.white,
  Colors.blue70,
  Colors.green50,
  Colors.cyan50,
  Colors.purple20,
  Colors.blue60,
  Colors.red10,
  Colors.green20,
  Colors.purple60
];

const keynotes =[
  "Complain directly with us by clicking on add complaints. Complaints are often sorted out immediately this way.",
  "If you don’t know who to contact, or you have a name but no telephone number, then call our enquiries team on +233 244 286 488",
  "The Best way to complain is to use our online form by clicking on the add complaint button above ."
]

const pageHeight = Constants.windowHeight / 3;

const Dashboard = () => {
  const [numberOfPagesShown, setNumberOfPagesShown] = useState(5);
  const [autoplay, setAutoplay] = useState(false);
  const carousel = useRef<typeof Carousel>(null);
  const animatedScrollOffset = useRef(new Animated.ValueXY()).current;

  const renderAnimatedCounter = () => {
    const animatedStyles = _.times(numberOfPagesShown, page => {
      return {
        opacity: animatedScrollOffset.y.interpolate({
          inputRange: [pageHeight * page - 50, pageHeight * page, pageHeight * page + 50],
          outputRange: [0, 1, 0]
        }),
        transform: [
          {
            translateX: animatedScrollOffset.y.interpolate({
              inputRange: [pageHeight * page - 50, pageHeight * page, pageHeight * page + 50],
              outputRange: [-50, 0, 50]
            })
          }
        ]
      };
    });

    return (
      <View absT>
        {_.times(numberOfPagesShown, page => (
          <Text key={page} h1 animated style={[styles.animatedPageCounter, animatedStyles[page]] as TextStyle}>
            {page}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <LinearGradientWrapper>
        <View flex paddingT-20 center>
        <View  marginB-40>
        <Text className="text-black text-2xl font-semibold">How to request help</Text>
      </View>
      <View>
        <Carousel
          key={'carousel'}
          ref={carousel}
          animatedScrollOffset={animatedScrollOffset}
          scrollEventThrottle={16}
          autoplay={autoplay}
          pageWidth={Constants.windowWidth}
          pageHeight={pageHeight}
          initialPage={0}
          containerStyle={{height: pageHeight}}
          allowAccessibleLayout
          horizontal={false}
        >
          {_.map(keynotes, (keynote, index) => (
            <Page style={{backgroundColor: BACKGROUND_COLORS[index]}} key={index}>
              <Text style={styles.pageText}>{keynote}</Text>
            </Page>
          ))}
        </Carousel>
        {renderAnimatedCounter()}
      </View>


    </View>
    </LinearGradientWrapper>
  );
};

// @ts-ignore
const Page = ({children, style, ...others}) => {
  return (
    <View center {...others} style={[styles.page, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  page: {
    flex: 1,
    height: pageHeight,
    width: Constants.windowWidth,
    borderRadius: 20
  },
  pageText: {
    fontSize: 30,
    color: 'black',
    marginHorizontal:10
  },
  animatedPageCounter: {
    position: 'absolute',
    top: 20,
    left: 20
  },
  widgetsCarousel: {
    height: 150,
    width: 300,
    backgroundColor: Colors.grey60,
    borderRadius: 24,
    overflow: 'hidden'
  }
});

export default Dashboard;
