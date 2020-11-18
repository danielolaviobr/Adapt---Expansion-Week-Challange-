import React, { useCallback, useState } from "react";
import {
  Text,
  Container,
  Buttons,
  PageBackground,
  PageVideoBackground,
  PageImageBackground,
} from "./styles";

import street from "../../assets/street.png";
import tracks from "../../assets/tracks.png";
import church from "../../assets/church.png";
import Contact from "../../components/Contact";
import Info from "../../components/Info";
import Transformer from "../../components/Transformer";

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(async () => {
    setIsModalOpen(false);
  }, []);

  return (
    <Container>
      <PageVideoBackground>
        <video className="videoTag" autoPlay loop muted>
          <source
            src="https://r3---sn-gpv7dn7e.googlevideo.com/videoplayback?expire=1605728733&ei=fSW1X9z3HrzZ-gbp_pvgBw&ip=212.47.239.90&id=o-AE1gbJiopT26AVJTzL32w80CgvavwuEuSN8FoZ79cIpE&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&vprv=1&mime=video%2Fwebm&gir=yes&clen=31547211&dur=162.040&lmt=1540117831470552&fvip=3&keepalive=yes&beids=23886218&c=WEB&txp=5432432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgf7JVhRJKeSj894Z6eChDsXHW-MTLL_Nll_FG2HnMWigCIGOuCCc1tm86dXd6KO96gs8xDXHEp0PnB6_X1xZf8KxR&ratebypass=yes&rm=sn-25gd77s,sn-jpuu5-8j2e7s&fexp=23886218&req_id=99ca845b9bafa3ee&redirect_counter=3&cm2rm=sn-pmcg-bg0z7k&cms_redirect=yes&ipbypass=yes&mh=3L&mip=200.95.174.8&mm=30&mn=sn-gpv7dn7e&ms=nxu&mt=1605707005&mv=m&mvi=3&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAJwMFhRzS5rIo6IYmKgXCyJ9MwIQHwRCR3SelgrrM-zoAiEA6g4LQZr1BjBXF1VS1yG2vIBJ-1Xr3GbHGxwYytH6ehY%3D"
            type="video/webm"
          />
        </video>
        <Text numberOfChilds={2}>
          <span>Adapt.</span>
          <span>Overcome.</span>
        </Text>
      </PageVideoBackground>
      <PageBackground>
        <Info
          modalState={isModalOpen}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
        />
        <Transformer />
      </PageBackground>
      <PageImageBackground backgroundURL={tracks}>
        <div className="text">
          <h1>Se inscreva em nossa newsletter</h1>
        </div>
        <Contact />
      </PageImageBackground>
    </Container>
  );
};

export default Main;
