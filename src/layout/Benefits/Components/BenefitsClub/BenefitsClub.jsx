import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './BenefitsClub-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { VerticalMiniSlide } from '../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { Button } from '../../../../components/elements/Button/Button';
import { theme } from '../../../../styles/theme';
import { ListContainer, ListItem, ListWrapper } from '../../../../components/elements/List/List-Styles';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';

export function BenefitsClub() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <Styled.BenefitsClubContainer>

      <Styled.TextContainer>
        <Title text="Boas-vindas ao Clube de Benefícios da T2S!" uppercase />

        <Text text="Aqui, você encontra tudo para tornar sua vida mais incrível: descontos, ofertas, experiências e muito mais!" />
        <Text text="
        O Clube de Benefícios da T2S tem seu próprio site, onde você encontra tudo o que precisa para aproveitar ao máximo seus benefícios.
        Para acessar:
       "
        />

        <ListWrapper>
          <ListContainer>
            <ListItem>
              Clique em qualquer um dos benefícios abaixo.
            </ListItem>

            <ListItem>
              Você será direcionado automaticamente para o site do Clube de Benefícios.
            </ListItem>

            <ListItem>
              Crie sua conta ou faça login, se já tiver uma.
            </ListItem>

            <ListItem>
              Comece a explorar e aproveitar as vantagens exclusivas que te esperam!
            </ListItem>
          </ListContainer>
        </ListWrapper>
      </Styled.TextContainer>

      {/* <Slide items={s2tState.photos.benefits} title="Benefícios" /> */}

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

        {/* disparando 2 warning de thid party cookies no console */}
        <VerticalSoloSlide title="Social" size="400px" items={s2tData.news} />

        <VerticalMiniSlide title="Notícias" type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.BenefitsClubContainer>
  );
}

BenefitsClub.propTypes = {
};
