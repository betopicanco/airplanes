import type { NextPage } from 'next'
import Image from 'next/image';
import { useRouter } from 'next/router';
import PrimaryButton from '../components/buttons/PrimaryButton';
import LayoutDefault from '../components/layout';
import BgDefault from '../components/layout/BgDefault';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <BgDefault>
      <LayoutDefault>
        <main>
          <div className={` hidden md:block`}>
            <Image 
              src={'/img/airplane-in-sky.jpg'} 
              layout={'fill'}
              alt={'Avião voando no céu'}/>
          </div>

          <div className={`fixed z-10 right-8 bottom-8`}>
            <PrimaryButton onClick={() => router.push(`travellers/search`)}>
              Buscar por passageiros
            </PrimaryButton>
          </div>
        </main>
      </LayoutDefault>
    </BgDefault>
  )
}

export default Home;