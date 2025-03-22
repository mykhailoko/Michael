import './Header.css';
import { Suspense } from 'react';
import { useTranslation  } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import ComputerOptimized from '../../../public/Computer';

const Header = () => {
  const[t] = useTranslation("global");

  return (
    <div className="header" id="home">
      <div className="mainpart">
          <div className="mainparttext">
            <Canvas id='computerCanvasPhone'>
              <ambientLight intensity={1} />
              <OrbitControls enableZoom={false} />
              <Suspense fallback={null}>
                <ComputerOptimized scale={[7.2, 7.2, 7.2]} rotation={[Math.PI / 7, -Math.PI / 7, 0]} position={[0, -0.7, 0]} />
              </Suspense>
              <Environment preset='sunset' />
            </Canvas>
              <h2 className="firsttext">hi, I'm <span>Michael</span>.</h2>
              <p className="secondtext">
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
              <ComputerOptimized scale={[6.7, 6.7, 6.7]} rotation={[Math.PI / 7, -Math.PI / 7, 0]} />
            </Suspense>
            <Environment preset='sunset' />
          </Canvas>
      </div>
    </div>
  )
}
  
export default Header