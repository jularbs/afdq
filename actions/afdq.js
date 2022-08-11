import axios from "axios";

const AFDQ_SLUG = "aliwan-fiesta-digital-queen-2021";

export const getDetails = () => {
  return axios({
    method: "GET",
    url: `${process.env.MBC_API}/poll/${AFDQ_SLUG}`,
    // headers: {
    //   x_mbc_pk: `${process.env.MBC_PUBLICKEY}`,
    //   x_mbc_sk: `${process.env.MBC_SECRETKEY}`,
    // },
  }).then((res) => {
    return res.data;
  });
};
export const getEntries = () => {
  return axios({
    method: "GET",
    url: `${process.env.MBC_API}/poll/options/${AFDQ_SLUG}`,
  }).then((res) => {
    return res.data;
  });
};

export const voteCandidate = (slug, token) => {
  return axios({
    method: "POST",
    url: `${process.env.MBC_API}/vote/cast`,
    headers: {
      x_mbc_pk: `${process.env.MBC_PUBLICKEY}`,
      x_mbc_sk: `${process.env.MBC_SECRETKEY}`,
      Authorization: `Bearer ${token}`,
    },
    data: {
      slug: slug,
    },
  }).then((res) => {
    return res.data;
  });
};
