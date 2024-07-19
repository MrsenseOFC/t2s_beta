import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Events-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { VerticalMiniSlide } from '../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { ListContainer, ListItem, ListWrapper } from '../../../../components/elements/List/List-Styles';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';

export function Events() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <Styled.EventsContainer>

      <Styled.TextContainer>
        <Title text="Boas-vindas aos eventos da T2S!" uppercase />

        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
        <Text text="
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et  fuga.
       "
        />

        <ListWrapper>
          <ListContainer>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>

            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>

            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>

            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </ListItem>
          </ListContainer>
        </ListWrapper>
      </Styled.TextContainer>

      <BannerSlide autoplay slidesperview={3}>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

      </BannerSlide>

      <Slide items={s2tData.photos.benefits} title="Outros benefícios T2S" />

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" gradientdirection="to top">
        <VerticalMiniSlide title="Eventos" type="events" items={s2tData.events} />

        <VerticalSoloSlide title="Social" size="400px" items={s2tData.news} />

        <VerticalMiniSlide title="Notícias" type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.EventsContainer>
  );
}

Events.propTypes = {
};
