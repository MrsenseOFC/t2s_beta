import Prop from 'prop-types';
import React, { useState } from 'react';
import { Check as CheckIcon } from '@styled-icons/fluentui-system-filled/Check';
import { PersonEdit as PersonEditIcon } from '@styled-icons/fluentui-system-filled/PersonEdit';
import { BookOpenGlobe as BookOpenIcon } from '@styled-icons/fluentui-system-filled/BookOpenGlobe';
import { Image as ImageIcon } from '@styled-icons/fluentui-system-filled/Image';
import { VideoAdd as VideoAddIcon } from '@styled-icons/fluentui-system-filled';
import * as Styled from './PlayerPage-Styles';
import { Title } from '../../../../components/elements/Title/Title';
import { GridLayout } from '../../../../components/GridLayout/GridLayout';
import { IconDiv } from '../../../../components/elements/IconDiv/IconDiv';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { theme } from '../../../../styles/theme';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { IconCard } from '../../../../components/elements/IconCard/IconCard';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';
import { Banner } from '../../../../components/elements/Banner/Banner';
import { Button } from '../../../../components/elements/Button/Button';
import { Text } from '../../../../components/elements/Text/Text';
import { Row } from '../../../../components/RowContainer/Row';

export function PlayerPage({ children }) {
  const [explanation, setExplanation] = useState(false);

  return (
    <Styled.PlayerPageContainer>
      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">
        <Subtitle
          as="h2"
          uppercase
          text="O caminho para o estrelato esportivo começa aqui."
          size={theme.sizes.huge}
        />
        <Text
          size={theme.sizes.large}
          text="Trabalhamos com atletas de todos os níveis, incluindo amadores, profissionais, semi profissionais e de categorias de base"
        />
        <Button
          path="/register"
          text="Registre-se"
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.lightprimary}
          texthover={theme.colors.primary}
          border={theme.colors.lightprimary}
          borderhover={theme.colors.primary}
          size={theme.sizes.large}
        />
      </Banner>

      <Subtitle text="Como funciona" size={theme.sizes.xxlarge} uppercase />

      <GridLayout>

        <IconCard>
          <CheckIcon />
          <Subtitle text="Crie sua conta" size={theme.sizes.small} uppercase as="h3" />
        </IconCard>

        <IconCard>
          <PersonEditIcon />
          <Subtitle text="Edite seu perfil" size={theme.sizes.small} uppercase as="h3" />
        </IconCard>

        <IconCard>
          <VideoAddIcon />
          <Subtitle text="Mostre seu talento" size={theme.sizes.small} uppercase as="h3" />
        </IconCard>

        <IconCard
          onclick={() => setExplanation(!explanation)}
          active={explanation}
          activecolor={theme.colors.primary}
        >
          <BookOpenIcon />
          <Subtitle text="Busque oportunidades" size={theme.sizes.small} uppercase as="h3" />

          {explanation && (
            <>
              <Styled.Explanation>
                <Text text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem" />
              </Styled.Explanation>
            </>
          )}
        </IconCard>

      </GridLayout>

      <BannerSlide slidesperview={1}>
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
      </BannerSlide>

      <Styled.Benefits>
        <Slide items={s2tData.photos.benefits} title="Benefícios exclusivos para jogadores" />
      </Styled.Benefits>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Subtitle text="Faça parte!" uppercase size={theme.sizes.xhuge} />

        <Text
          size={theme.sizes.large}
          text="Crie o seu perfil, compartilhe suas melhores fotos e vídeos e deixe que o mundo descubra o seu talento."
        />

        <Row>
          <Button
            path="/login"
            text="Login"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.lightprimary}
            texthover={theme.colors.primary}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
            size={theme.sizes.medium}
          />

          <Button
            path="/register"
            text="Registre-se"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.lightprimary}
            texthover={theme.colors.primary}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
            size={theme.sizes.medium}
          />

        </Row>

      </Banner>

    </Styled.PlayerPageContainer>
  );
}

PlayerPage.propTypes = {

};
