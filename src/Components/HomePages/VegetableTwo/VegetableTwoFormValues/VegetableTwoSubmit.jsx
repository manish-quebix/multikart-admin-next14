import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const VegetableTwoSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  values["content"]["home_banner"]["banners"].forEach((elem, i) => {
 if (!values["content"]["home_banner"]["banners"][i]["redirect_link"]) {
      values["content"]["home_banner"]["banners"][i]["redirect_link"] = {}; // Initialize redirect_link if undefined
    }

    if (values[`homeBannerImage${i}`]) {
      values["content"]["home_banner"]["banners"][i]["image_url"] = values[`homeBannerImage${i}`].original_url;
    } else {
      values["content"]["home_banner"]["banners"][i]["image_url"] = "";
    }

    if (values[`homeRedirectLinkType${i}`] || values[`homeRedirectLink${i}`]) {
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link_type"] = values[`homeRedirectLinkType${i}`];
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link"] = values[`homeRedirectLink${i}`];
      if (values[`homeRedirectLinkType${i}`] == "product") {
        values["content"]["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`homeRedirectLink${i}`];
      } else {
        values["content"]["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  values["content"]["banner"]["banners"].forEach((elem, i) => {
    if (values[`bannerImage${i}`]) {
      values["content"]["banner"]["banners"][i]["image_url"] = values[`bannerImage${i}`].original_url;
    } else {
      values["content"]["banner"]["banners"][i]["image_url"] = "";
    }

    if (values[`bannerRedirectLinkType${i}`] || values[`bannerRedirectLink${i}`]) {
      values["content"]["banner"]["banners"][i]["redirect_link"]["link_type"] = values[`bannerRedirectLinkType${i}`];
      values["content"]["banner"]["banners"][i]["redirect_link"]["link"] = values[`bannerRedirectLink${i}`];
      if (values[`bannerRedirectLinkType${i}`] == "product") {
        values["content"]["banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`bannerRedirectLink${i}`];
      } else {
        values["content"]["banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["banner"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["banner"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  values["content"]["services"]["banners"].forEach((elem, i) => {
    if (values[`serviceBannerImage${i}`]) {
      values["content"]["services"]["banners"][i]["image_url"] = values[`serviceBannerImage${i}`].original_url;
    } else {
      values["content"]["services"]["banners"][i]["image_url"] = "";
    }
  });

  // Images
  if (values["offerBannerImage"]) {
    values["content"]["offer_banner"]["image_url"] = values["offerBannerImage"].original_url;
  } else values["content"]["offer_banner"]["image_url"] = "";

  // ============================================================================================

  if (values["offerBannerLinkType"]) {
    values["content"]["offer_banner"]["redirect_link"]["link_type"] = values["offerBannerLinkType"];
  } else {
    values["content"]["offer_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["redirect_link"]["link"] = "";
  }
  if (values["offerBannerLink"]) {
    values["content"]["offer_banner"]["redirect_link"]["link"] = values["offerBannerLink"];
    if (values["offerBannerLinkType"] == "product") {
      values["content"]["offer_banner"]["redirect_link"]["link"] = values["offerBannerLink"];
    } else {
      values["content"]["offer_banner"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["redirect_link"]["link"] = "";
  }

  // ============================================================================================
  //MultiSelect
  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
  }
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["productList1Product"]) {
    values["content"]["products_list_1"]["product_ids"] = values["productList1Product"];
  }

  if (values["productList2Product"]) {
    values["content"]["products_list_2"]["product_ids"] = values["productList2Product"];
  }

  if (values["categoryProductList"]) {
    values["content"]["category_product"]["category_ids"] = values["categoryProductList"];
  }

  
  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(concatDynamicProductKeys(values))),
    },
  };

  mutate(updatedValues);
};
export default VegetableTwoSubmit;
