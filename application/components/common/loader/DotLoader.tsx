// Dot.tsx
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

type DotLoaderProps = {
  size?: number;
  dotRadius?: number;
  color?: string;
  count?: number;
  duration?: number;
};

export const DotLoader: React.FC<DotLoaderProps> = ({
  size = 80,
  dotRadius = 8,
  color = '#4A90E2',
  count = 3,
  duration = 600,
}) => {
  const dots = Array.from({ length: count });

  return (
    <View
      style={{
        width: size,
        height: dotRadius * 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Svg width={size} height={dotRadius * 4}>
        {dots.map((_, i) => {
          return (
            <Dot
              key={i}
              cx={(i + 0.5) * (size / count)}
              cy={dotRadius * 2}
              radius={dotRadius}
              color={color}
              duration={duration}
              delay={i * 150} // stagger for smooth bounce
            />
          );
        })}
      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type DotProps = {
  cx: number;
  cy: number;
  radius: number;
  color: string;
  duration: number;
  delay: number;
};

export const Dot: React.FC<DotProps> = ({
  cx,
  cy,
  radius,
  color,
  duration,
  delay,
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withDelay(
        delay,
        withSequence(
          withTiming(1, { duration: duration / 2 }),
          withTiming(0, { duration: duration / 2 })
        )
      ),
      -1,
      false
    );
  }, [delay, duration, progress]);

  const animatedProps = useAnimatedProps(() => {
    return {
      r: radius * (0.6 + progress.value * 0.4),
      opacity: 0.5 + progress.value * 0.5,
    };
  });

  return (
    <AnimatedCircle
      cx={cx}
      cy={cy}
      r={radius}
      fill={color}
      animatedProps={animatedProps}
    />
  );
};
