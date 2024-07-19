import React, { useContext } from 'react';
import * as Styled from './ClubHome-Styles';
import { VerticalMiniSlide } from '../../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { VerticalSoloSlide } from '../../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { BannerSlide } from '../../../../../components/elements/BannerSlide/BannerSlide';
import { VerticalVideoSlide } from '../../../../../components/elements/VerticalVideoSlide/VerticalVideoSlide';

export function ClubHome() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.ClubHomeContainer>

      <BannerSlide slidesperview={2} backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">
        <VerticalSoloSlide title="Social" size="400px" items={s2tState.news} />
        <VerticalMiniSlide title="Ranking" type="referralrank" items={s2tState.rankings.referral} />
      </BannerSlide>

      {/* temporário, requer mudanças */}
      <BannerSlide title="Vídeos em alta" slidesperview={2}>

        <VerticalVideoSlide size="300px" items={s2tState.news} title="Profissional" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Semi-profissional" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Universitário" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Amador" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Recreacional" />

      </BannerSlide>
      {/* temporário, requer mudanças */}

      <BannerSlide slidesperview={2} backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png" gradientdirection="to top">
        <VerticalMiniSlide title="Eventos" type="events" items={s2tState.events} />
        <VerticalMiniSlide title="Notícias" type="news" items={s2tState.news} />
      </BannerSlide>

    </Styled.ClubHomeContainer>
  );
}
