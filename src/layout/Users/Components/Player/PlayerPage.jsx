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
import { ListContainer, ListItem } from '../../../../components/elements/List/List-Styles';
import { List } from '../../../../components/elements/List/List';

export function PlayerPage({ children }) {
  const [explanation, setExplanation] = useState('step-1');

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

        <IconCard
          name="Busque oportunidades"
          onclick={() => setExplanation(explanation === 'step-1' ? '' : 'step-1')}
          active={explanation === 'step-1'}
          activecolor={theme.colors.primary}
        >
          <CheckIcon />
          <Subtitle text="Crie sua conta" size={theme.sizes.small} uppercase as="h3" />

          {explanation === 'step-1' && (
            <Styled.Explanation>
              <ListContainer>
                <ListItem color={theme.colors.primary}>
                  Acesse a plataforma e clique em "Registre-se".
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Informe seus dados pessoais com atenção e complete todos os campos obrigatórios.
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Selecione a opção "Atleta" para se cadastrar como um atleta em busca de oportunidades.
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Valide sua conta: Confirme seu email e siga as instruções para concluir o processo de cadastro.
                </ListItem>
              </ListContainer>
            </Styled.Explanation>
          )}
        </IconCard>

        <IconCard
          name="Busque oportunidades"
          onclick={() => setExplanation(explanation === 'step-2' ? '' : 'step-2')}
          active={explanation === 'step-2'}
          activecolor={theme.colors.primary}
        >
          <PersonEditIcon />
          <Subtitle text="Edite seu perfil" size={theme.sizes.small} uppercase as="h3" />

          {explanation === 'step-2' && (
            <Styled.Explanation>
              <ListContainer>
                <ListItem color={theme.colors.primary}>
                  Clique em "Minha area" para entrar na página do seu perfil.
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Utilize imagens profissionais e de alta qualidade em seu perfil e banner para causar uma boa impressão.
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Adicione detalhes sobre sua experiência, habilidades, formação e conquistas.
                </ListItem>
              </ListContainer>
            </Styled.Explanation>
          )}
        </IconCard>

        <IconCard
          name="Busque oportunidades"
          onclick={() => setExplanation(explanation === 'step-3' ? '' : 'step-3')}
          active={explanation === 'step-3'}
          activecolor={theme.colors.primary}
        >
          <VideoAddIcon />
          <Subtitle text="Mostre seu talento" size={theme.sizes.small} uppercase as="h3" />

          {explanation === 'step-3' && (
            <Styled.Explanation>
              <ListContainer>
                <ListItem color={theme.colors.primary}>
                  Em sua área acesse a opção "perfil" através do menu de navegação
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  No carrosel de mídias utilize o botão "+" para selecionar e enviar seus melhores conteúdos.
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Inclua fotos e vídeos que demonstrem suas habilidades, técnicas e momentos de destaque em competições ou treinos.
                </ListItem>
              </ListContainer>
            </Styled.Explanation>
          )}
        </IconCard>

        <IconCard
          name="Busque oportunidades"
          onclick={() => setExplanation(explanation === 'step-4' ? '' : 'step-4')}
          active={explanation === 'step-4'}
          activecolor={theme.colors.primary}
        >
          <BookOpenIcon />
          <Subtitle text="Busque oportunidades" size={theme.sizes.small} uppercase as="h3" />

          {explanation === 'step-4' && (
            <Styled.Explanation>
              <ListContainer>
                <ListItem color={theme.colors.primary}>
                  Acesse a seção "Oportunidades" para visualizar as vagas disponíveis.
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Utilize os filtros para encontrar oportunidades que se encaixam em seu perfil e interesses.
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Clique na vaga que te interessa, leia com atenção os detalhes e requisitos para saber se você se encaixa!
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  Se você se encaixa nos requisitos, preencha a área de texto com uma apresentação e clique em "Enviar" para dar o próximo passo.
                </ListItem>
              </ListContainer>
            </Styled.Explanation>
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
