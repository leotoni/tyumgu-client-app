import React, { PropTypes } from 'react'
import _ from 'lodash'
import ReactLetterAvatar from '../letter-avatar'

const propTypes = {
  opts: PropTypes.object.isRequired
};

/**
 * Компонент для рендеринга аватарки/layout пользователя
 */
class ProfileImage extends React.Component {
  /**
   * @inheritdoc
   */
  render() {
    
    let opts = this.props.opts
      , image = null
      , baseCover = opts.baseCover || null;
    

    /**
     * Формируем ссылку на файл, подставляя токен
     */
    let src = (
      opts.src
      && `${opts.basePath}${opts.src.replace(/^\/+/, '')}?t=${opts.token}`
    ) || baseCover;

    /**
     * Определяем, это LetterAvatar или изображение
     */
    if (opts.isReactLetterAvatar) {
      image = opts.letterAvatarClassName
        ? (
          <div className={opts.letterAvatarClassName}>
            <ReactLetterAvatar name={opts.name} size={opts.size} radius={opts.radius} border={opts.border} />
          </div>
        )
        : <ReactLetterAvatar name={opts.name} size={opts.size} radius={opts.radius} border={opts.border} />;
    } else if (src) {
      image = <img src={src} className={opts.className} alt={opts.alt || ""} />;
    }

    return (image);
  }
};

ProfileImage.propTypes = propTypes;

export default ProfileImage;