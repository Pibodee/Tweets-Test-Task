import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 36px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Pic = styled.img`
  display: block;
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border: 4px solid #ebd8ff;
`;

export const TweetsText = styled.p`
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  display: block;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const FollowBtn = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
`;
