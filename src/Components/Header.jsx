import '../Styles/Header.scss';
import { Suspense } from 'react';
import { useTranslation  } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Computer from '../../public/Computer';

const Header = () => {
  const[t] = useTranslation("global");

  return (
    <div className="header" id="home">
      <div className="mainpart">
          <div className="mainpart-phone">
            <Canvas id='computerCanvasPhone'>
              <ambientLight intensity={1} />
              <OrbitControls enableZoom={false} />
              <Suspense fallback={null}>
                <Computer scale={[0.65, 0.65, 0.65]} rotation={[Math.PI / 7, -Math.PI / 7, 0]} position={[0, 0, 0]} />
              </Suspense>
              <Environment preset='sunset' />
            </Canvas>
              <h2 className="first-text">hi, I'm <span>Michael</span>.</h2>
              <p className="second-text">
                {t("header.message")}
              </p>
              <a href="https://github.com/mykhailoko" target="_blank" rel="noreferrer">
                <button className='check-out'>Check out Github</button>
              </a>
          </div>

          <Canvas id='computerCanvas'>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <Computer scale={[0.6, 0.6, 0.6]} rotation={[Math.PI / 7, -Math.PI / 7, 0]} position={[0, 0.5, 0]} />
            </Suspense>
            <Environment preset='sunset' />
          </Canvas>
      </div>
    </div>
  )
}
  
export default Header