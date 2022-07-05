import { GetServerSidePropsContext } from "next";
import LayoutDefault from "../../components/layout";
import BgDefault from "../../components/layout/BgDefault";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
}

export default function ShowTraveller() {
  return (
    <BgDefault>
      <LayoutDefault>
        <main className={` mx-8 sm:mx-24 mt-20 pt-12 `}>
          <div className={` 
            flex justify-between 
            font-bold bg-white 
            py-2 px-4 rounded-md
          `}>

          </div>
        </main>
      </LayoutDefault>
    </BgDefault>
  );
}