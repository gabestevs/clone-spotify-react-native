import React, { useState } from 'react';
import { Image } from 'react-native';
import Slider from '@react-native-community/slider';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronIcon } from '../icons/Chevron';
import { MoreVertIcon } from '../icons/MoreVert';
import { PlayIcon } from '../icons/Play';
import { ForwardIcon } from '../icons/Forward';
import { ReplayIcon } from '../icons/Replay';

const Background = ({ children }) => {
  return (
    <LinearGradient
        colors={['#464769', '#1B1A1F']}
        style={{
          flex: 1,
          paddingTop: 50,
        }}>
        {children}
    </LinearGradient>
  );
};

// ESTILO TOP BAR

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;
TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

// ESTILO DA TELA

const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;

const CoverArea = styled.View`
  flex: 4; 
`;

CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;
`;

const PlayerArea = styled.View`
  flex: 2; 
  justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
  color: white;
  font-size: 24px;
`;

PlayerArea.Author = styled.Text`
  color: #BBBBBB;
  font-size: 16px;
`;

const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity`
`;

Controls.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

Controls.Slider.CurrentTime = styled.Text`
  color: #bbbbbb;
`;

Controls.Slider.TotalTime = styled.Text`
  color: #bbbbbb;
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

export function PlayerScreen() {
  const [segundos, setSegundos] = useState(0);

  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>
        
        <TopBar.Middle>
          <TopBar.Title>
            Frank Ocean
          </TopBar.Title>
          <TopBar.SubTitle>
            Blond
          </TopBar.SubTitle>
        </TopBar.Middle>

        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      </TopBar>

      <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.ome.lt/P-2u_z4Rr8JsmcWDJFwMF6OJMqw=/fit-in/837x500/smart/uploads/conteudo/fotos/Blond01.jpg",
            }}
          />
        </CoverArea>

        <PlayerArea>
          <PlayerArea.Title>
            Godspeed
          </PlayerArea.Title>
          <PlayerArea.Author>
            Frank Ocean
          </PlayerArea.Author>

          <Controls>
            <Controls.Slider>
              <AudioSlider
                thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#1DD65F"
                maximumTrackTintColor="#777777"
                minimumValue={0}
                maximumValue={100}
                value={segundos}
                onValueChange={(value) => {
                  setSegundos(value);                  
                }}
              />
              <Controls.Slider.CurrentTime>
                0:{segundos}
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>
                2:58
              </Controls.Slider.TotalTime>
            </Controls.Slider>

            <Controls.Play>
                <ReplayIcon />
            </Controls.Play>

            <Controls.Play>
              <PlayIcon
                width={80}
                height={80}
              />
            </Controls.Play>

            <Controls.Play>
              <ForwardIcon/>
            </Controls.Play>

          </Controls>
        </PlayerArea>
      </ScreenArea>
    </Background>
  );
}