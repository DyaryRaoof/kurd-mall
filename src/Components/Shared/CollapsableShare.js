import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from 'react-share';

const CollapsableShare = () => (
  <div className="collapse" id="share-collapse">
    <div className="card card-body">
      <div>
        <FacebookShareButton
          url={window.location.href}
        >
          <FacebookIcon size={30} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={window.location.href}
        >
          <TwitterIcon size={30} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={window.location.href}
        >
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
        <TelegramShareButton
          url={window.location.href}
        >
          <TelegramIcon size={30} round />
        </TelegramShareButton>
        <ViberShareButton><ViberIcon size={30} round /></ViberShareButton>
        <FacebookMessengerShareButton
          url={window.location.href}
        >
          <FacebookMessengerIcon size={30} round />
        </FacebookMessengerShareButton>
      </div>
    </div>
  </div>
);

export default CollapsableShare;
