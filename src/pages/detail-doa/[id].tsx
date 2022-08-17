import { LINK_DETAIL_DOA, LINK_LIST_DOA } from "src/utils/data";
import { memo } from "react";
import { Context, DetailPaths, Doa } from "src/interface";
import NextButton from "src/components/nextButton";
import PreviousButton from "src/components/previousButton";
import Layout from "src/components/layout";
import Detail from "src/components/detail";

export const getStaticPaths = async () => {
  try {
    const response: Response = await fetch(LINK_LIST_DOA);
    const data = await response.json();

    const paths = data.data.map((detail: DetailPaths) => {
      return {
        params: { id: detail.id_doa },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error(err);
  }
};

export const getStaticProps = async (context: Context) => {
  try {
    const id: string = context.params.id;
    const response: Response = await fetch(`${LINK_DETAIL_DOA}/${id}`);
    const data = await response.json();

    return {
      props: {
        doa: data.data,
      },
    };
  } catch (err) {
    console.error(err);
  }
};

const DetailDoa = ({ doa }: Doa) => {
  return (
    <>
      {doa.map((item) => (
        <Layout title={item.nama} key={item.id_doa}>
          <PreviousButton item={item} />
          <NextButton item={item} />
          <Detail item={item} />
        </Layout>
      ))}
    </>
  );
};

export default memo(DetailDoa);
