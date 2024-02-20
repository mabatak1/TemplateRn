/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');

const BUTTON_WIDTH = width - 80;
const BUTTON_HEIGHT = 48;
const BOTTOM_SPACING = 50;
const ITEM_SPACING = 10;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const TestView = () => {
  const openAnimation = useRef(new Animated.Value(0)).current;
  const isOpen = useRef<{state: 'RUNNING' | 'NONE'; value: boolean}>({
    state: 'NONE',
    value: false,
  }).current;

  return (
    <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'white'}}>
      <View
        style={{
          position: 'absolute',
          bottom: 100,
          width: BUTTON_WIDTH,
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <AnimatedPressable
          style={{
            width: BUTTON_WIDTH,
            height: BUTTON_HEIGHT,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [
              {
                translateY: openAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -(BOTTOM_SPACING + BUTTON_HEIGHT)],
                  extrapolate: 'clamp',
                }),
              },
            ],
            opacity: openAnimation.interpolate({
              inputRange: [0, 0.4, 1],
              outputRange: [0, 0, 1],
              extrapolate: 'clamp',
            }),
          }}>
          <Animated.View
            style={{
              width: BUTTON_HEIGHT,
              height: BUTTON_HEIGHT,
              backgroundColor: 'red',
              position: 'absolute',
              left: 0,
              borderRadius: BUTTON_HEIGHT,
              transform: [
                {
                  translateX: openAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [(BUTTON_WIDTH - BUTTON_HEIGHT) / 2, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
          <Animated.View
            style={{
              width: BUTTON_HEIGHT,
              height: BUTTON_HEIGHT,
              backgroundColor: 'red',
              position: 'absolute',
              right: 0,
              borderRadius: BUTTON_HEIGHT,
              transform: [
                {
                  translateX: openAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [-(BUTTON_WIDTH - BUTTON_HEIGHT) / 2, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
          <Animated.View
            style={{
              width: BUTTON_WIDTH - BUTTON_HEIGHT,
              height: BUTTON_HEIGHT,
              backgroundColor: 'red',
              position: 'absolute',
              transform: [
                {
                  scaleX: openAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
              left: BUTTON_HEIGHT / 2,
            }}
          />
          <Animated.Text
            style={{
              color: 'white',
              opacity: openAnimation.interpolate({
                inputRange: [1, 1.4, 2],
                outputRange: [0, 0, 1],
                extrapolate: 'clamp',
              }),
            }}>
            Button 1
          </Animated.Text>
          <Animated.View
            style={{
              width: BUTTON_HEIGHT - 10,
              height: BUTTON_HEIGHT - 10,
              backgroundColor: 'white',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              transform: [
                {
                  translateX: openAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0, (BUTTON_WIDTH - BUTTON_HEIGHT) / 2],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              1
            </Text>
          </Animated.View>
        </AnimatedPressable>
        <AnimatedPressable
          style={{
            width: BUTTON_WIDTH,
            height: BUTTON_HEIGHT,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [
              {
                translateY: openAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    0,
                    -(BOTTOM_SPACING + 2 * BUTTON_HEIGHT + ITEM_SPACING),
                  ],
                  extrapolate: 'clamp',
                }),
              },
            ],
            opacity: openAnimation.interpolate({
              inputRange: [0, 0.4, 1],
              outputRange: [0, 0, 1],
              extrapolate: 'clamp',
            }),
          }}>
          <Animated.View
            style={{
              width: BUTTON_HEIGHT,
              height: BUTTON_HEIGHT,
              backgroundColor: 'red',
              position: 'absolute',
              left: 0,
              borderRadius: BUTTON_HEIGHT,
              transform: [
                {
                  translateX: openAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [(BUTTON_WIDTH - BUTTON_HEIGHT) / 2, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
          <Animated.View
            style={{
              width: BUTTON_HEIGHT,
              height: BUTTON_HEIGHT,
              backgroundColor: 'red',
              position: 'absolute',
              right: 0,
              borderRadius: BUTTON_HEIGHT,
              transform: [
                {
                  translateX: openAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [-(BUTTON_WIDTH - BUTTON_HEIGHT) / 2, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
          <Animated.View
            style={{
              width: BUTTON_WIDTH - BUTTON_HEIGHT,
              height: BUTTON_HEIGHT,
              backgroundColor: 'red',
              position: 'absolute',
              transform: [
                {
                  scaleX: openAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
              left: BUTTON_HEIGHT / 2,
            }}
          />
          <Animated.Text
            style={{
              color: 'white',
              opacity: openAnimation.interpolate({
                inputRange: [1, 1.4, 2],
                outputRange: [0, 0, 1],
                extrapolate: 'clamp',
              }),
            }}>
            Button 2
          </Animated.Text>
          <Animated.View
            style={{
              width: BUTTON_HEIGHT - 10,
              height: BUTTON_HEIGHT - 10,
              backgroundColor: 'white',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              transform: [
                {
                  translateX: openAnimation.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0, (BUTTON_WIDTH - BUTTON_HEIGHT) / 2],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              2
            </Text>
          </Animated.View>
        </AnimatedPressable>

        <AnimatedPressable
          onPress={() => {
            if (isOpen.state === 'RUNNING') {
              return;
            }
            isOpen.state = 'RUNNING';
            if (isOpen.value) {
              Animated.timing(openAnimation, {
                toValue: 1,
                duration: 500,
                easing: Easing.bezier(0.22, 1, 0.36, 1),
                useNativeDriver: true,
              }).start(() => {
                Animated.timing(openAnimation, {
                  toValue: 0,
                  duration: 500,
                  easing: Easing.bezier(0.85, 0, 0.15, 1),
                  useNativeDriver: true,
                }).start(() => {
                  isOpen.value = false;
                  isOpen.state = 'NONE';
                });
              });
            } else {
              Animated.timing(openAnimation, {
                toValue: 1,
                duration: 500,
                easing: Easing.bezier(0.22, 1, 0.36, 1),
                useNativeDriver: true,
              }).start(() => {
                Animated.timing(openAnimation, {
                  toValue: 2,
                  duration: 500,
                  easing: Easing.bezier(0.85, 0, 0.15, 1),
                  useNativeDriver: true,
                }).start(() => {
                  isOpen.value = true;
                  isOpen.state = 'NONE';
                });
              });
            }
          }}
          style={{
            backgroundColor: 'red',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: BUTTON_HEIGHT,
            height: BUTTON_HEIGHT,
            borderRadius: 100,
            transform: [
              {
                rotate: openAnimation.interpolate({
                  inputRange: [1, 2],
                  outputRange: ['0deg', '45deg'],
                  extrapolate: 'clamp',
                }),
              },
              {
                scale: openAnimation.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [1, 0.95, 1.1],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <View style={{height: 50, width: 50, backgroundColor: 'black'}} />
        </AnimatedPressable>
      </View>
    </View>
  );
};

export default TestView;
