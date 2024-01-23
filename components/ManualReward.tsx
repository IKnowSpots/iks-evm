import { updateWhitelist } from "@/utils";
import React, { useState } from "react";
import LoadingModal from "./LoadingModal";

export default function Manual(tokenId: any) {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  async function updateWhitelistCall() {
    setLoading(true);
    await updateWhitelist(tokenId.tokenId, address);
    setLoading(false);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-10">
      <LoadingModal visible={loading} />
      <div className="w-full flex flex-col">
        <label className="pb-3 text-[1.5rem] font-semibold">
          Wallet Address
        </label>
        <input
          type="text"
          id="event-name"
          placeholder="Wallet Address"
          className="bg-[#1E1E1E] bg-opacity-75 border border-[#989898] border-opacity-30 rounded-lg p-2"
          onChange={(e) => setAddress(e.target.value)}
        />
        <p className="text-white/50 mt-1">
          Enter wallet address to be added to shortlist
        </p>
      </div>

      <div className="w-[60%]">
        <button
          className="w-full subscribe-button hover:bg-[#44444400] px-5 py-1"
          onClick={updateWhitelistCall}
        >
          Update
        </button>
      </div>
    </div>
  );
}
