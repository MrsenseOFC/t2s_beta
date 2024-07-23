import Prop, { bool } from 'prop-types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import { Fullscreen } from '@styled-icons/material-outlined';
import { Delete } from '@styled-icons/fluentui-system-filled';
import * as Styled from './ProfileSlide-Styles';
import { Title } from '../Title/Title';
import { IconDiv } from '../IconDiv/IconDiv';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../styles/theme';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';
import { RateIcons } from '../RateIcons/RateIcons';
import { ReportModal } from '../ReportModal/ReportModal';
import { ImageModal } from '../ImageModal/ImageModal';
import { ReportIcon } from '../ReportIcon/ReportIcon';
import { RemoveIcon } from '../RemoveIcon/RemoveIcon';
import { Popup } from '../Popup/Popup';

export function ProfileSlide({
  items, title, publicview = false, ownerview,
}) {
  const [reportingMedia, setReportingMedia] = useState('');
  const [fullscreenImage, setFullscreenImage] = useState('');
  const [deleteImage, setDeleteImage] = useState('');

  const handleFullscreen = (item) => {
    setFullscreenImage(item.src);
  };

  const handleReporting = (item) => {
    setReportingMedia(reportingMedia ? '' : item.id);
  };

  const handleIsDeleting = (item) => {
    setDeleteImage(deleteImage === item.id ? '' : item.id);
  };

  const handleConfirmDelete = (item) => {
    // lógica para excluir imagem
    setDeleteImage('');
  };

  return (
    <Styled.ProfileSlideWrapper>
      <Styled.ProfileSlideElement>
        <Title text={title} uppercase />
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          navigation
          zoom
          lazy="true"
          breakpoints={{
            // Breakpoint for tablet screens
            768: {
              slidesPerView: 2,
            },
            // Breakpoint for mobile screens
            0: {
              slidesPerView: 1,
            },
          }}
        >

          {items.length > 0 && items.map((item) => (
            <SwiperSlide
              key={item.id}
              lazy={item.type === 'video'}
            >

              {item.type === 'photo' && (
              <Styled.MediaWrapper>

                {publicview && (
                  <>
                    <Styled.TopIconsWrapper>

                      <ReportIcon
                        isreporting={reportingMedia === item.id}
                        onclick={() => handleReporting(item)}
                      />

                      <FavoriteIcon
                        isfavorite={item.isfavorite}
                        id={item.id}
                      />

                    </Styled.TopIconsWrapper>

                    <Styled.BottomIconsWrapper>

                      <RateIcons
                        ratevalue={item.rateValue}
                        mediaid={item.id}
                      />

                      <IconDiv
                        active={fullscreenImage === item.src}
                        name="Tela cheia"
                        onclick={() => handleFullscreen(item)}
                      >
                        <Fullscreen />
                      </IconDiv>

                    </Styled.BottomIconsWrapper>
                  </>
                )}

                {ownerview && (
                  <>

                    <Styled.TopIconsWrapper>
                      <IconDiv
                        onclick={() => handleIsDeleting(item)}
                        active={deleteImage === item.id}
                        activecolor={theme.colors.red}
                        hovercolor={theme.colors.lightred}
                      >
                        <Delete />
                      </IconDiv>
                    </Styled.TopIconsWrapper>

                    <Styled.BottomIconsWrapper>
                      <IconDiv
                        active={fullscreenImage === item.src}
                        name="Tela cheia"
                        onclick={() => handleFullscreen(item)}
                      >
                        <Fullscreen />
                      </IconDiv>
                    </Styled.BottomIconsWrapper>

                    <Popup
                      isopen={deleteImage === item.id}
                      title="Tem certeza que deseja excluir essa imagem?"
                      firstoption="Sim"
                      secondoption="Não"
                      onfirstclick={() => handleConfirmDelete(item)}
                      onsecondclick={() => handleIsDeleting('')}
                    />

                  </>
                )}

                <div className="swiper-zoom-container">
                  <img src={item.src} alt={item.alt} />
                </div>

              </Styled.MediaWrapper>
              )}

              {item.type === 'video' && (
              <Styled.MediaWrapper>

                {publicview && (
                <>
                  <Styled.TopIconsWrapper>

                    <ReportIcon
                      isreporting={reportingMedia === item.id}
                      onclick={() => handleReporting(item)}
                    />

                    <FavoriteIcon
                      isfavorite={item.isfavorite}
                      mediaid={item.id}
                    />

                  </Styled.TopIconsWrapper>

                  <Styled.BottomIconsWrapper>

                    <RateIcons
                      ratevalue={item.rateValue}
                      mediaid={item.id}
                    />

                  </Styled.BottomIconsWrapper>
                </>
                )}

                <video autoPlay muted>
                  <source src={item.src} type="video/mp4" />
                  <track kind="captions" src="" srcLang="en" />
                </video>

              </Styled.MediaWrapper>
              )}

            </SwiperSlide>
          ))}

          {ownerview && (
          <SwiperSlide>
            <Styled.MediaWrapper>

              <AuthIconFile id="addMoreMedia" accept="image/*,video/*" hovercolor={theme.colors.secondary} name="Botão para adicionar uma novo foto ou um novo vídeo ao seu perfil">
                <AddIcon />
              </AuthIconFile>

              <img src="/assets/images/backgrounds/ball.png" alt="" />
            </Styled.MediaWrapper>
          </SwiperSlide>
          )}

        </Swiper>

      </Styled.ProfileSlideElement>

      {publicview && <ReportModal imageid={reportingMedia} onclick={() => setReportingMedia('')} />}

      <ImageModal imagesrc={fullscreenImage} onclick={() => setFullscreenImage('')} />

    </Styled.ProfileSlideWrapper>
  );
}

ProfileSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
  publicview: Prop.bool,
  ownerview: Prop.bool,
};
