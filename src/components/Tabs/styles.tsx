import { Animated } from 'react-native';
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
    height: 100px;
    margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainer: { paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 3px;
    margin-left: 20px;
    padding: 10px;
    justify-content: space-between;
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #fff;
`;