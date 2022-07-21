import { memo } from "react";
import { Icontext, Idetail, Idoa } from "src/interface";
import axios, { AxiosResponse } from "axios";
import NextButton from "src/components/nextButton";
import PreviousButton from "src/components/previousButton";
import Layout from "src/components/layout";
import Detail from "src/components/detail";

export const getStaticPaths = async () => {
  try {
    const response: AxiosResponse = await axios({
      url: "https://tanyadoa-api.herokuapp.com/all",
      method: "get",
    });

    const paths = response.data.data.map((detail: Idetail) => {
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

export const getStaticProps = async (context: Icontext) => {
  try {
    const id = context.params.id;
    const response: AxiosResponse = await axios({
      method: "get",
      url: `https://tanyadoa-api.herokuapp.com/show/${id}`,
    });

    return {
      props: {
        doa: response.data.data,
      },
    };
  } catch (err) {
    console.error(err);
  }
};

const DetailDoa = ({ doa }: Idoa) => {
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
