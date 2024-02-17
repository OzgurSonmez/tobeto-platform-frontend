import React, { useEffect, useState } from "react";
import "./CapabilityList.css";
import CapabilityElement from "./CapabilityElement";
import accountCapabilityService from "../../../services/accountCapabilityService";
import { useDispatch, useSelector } from "react-redux";
import { GetListByAccountIdAccountCapabilityListItemDto } from "../../../models/accountCapability/getListByAccountIdAccountCapabilityListItemDto";
import { RootState } from "../../../store/configureStore";
import { setAccountCapabilities } from "../../../store/accountCapability/accountCapabilitySlice";

type Props = {};

const CapabilityList = (props: Props) => {

  const dispatch = useDispatch();

  const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

  const accountCapabilities: GetListByAccountIdAccountCapabilityListItemDto[] = useSelector((state: RootState) => state.accountCapability.accountCapabilities);

  async function fetchData() {
    try {
      const accountCapabilitiesResponse = await accountCapabilityService.getListByAccountId(accountId);
      const data = accountCapabilitiesResponse.data.items;
      dispatch(setAccountCapabilities(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="capability-list">
      {accountCapabilities.map((value, index) => (
        <CapabilityElement
          key={index}
          id={value.id.toString()}
          capabilityName={value.capabilityName}
        />
      ))}
    </div>
  );
};

export default CapabilityList;
