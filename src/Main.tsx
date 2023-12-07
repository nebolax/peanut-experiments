import { Hex, hexToBigInt, sliceHex } from "viem";
import { useAccount, useSignTypedData } from "wagmi"



export function Main() {
  const { address } = useAccount();
  console.log("Connected address:", address)

  const domain = {
    name: 'Peanut',
    version: '4.2',
    chainId: 11155111,
    verifyingContract: '0x389B14243191F8ad982b264ae75C735E1B4760e7' as Hex,
  };

  // The named list of all type definitions
  const types = {
    GaslessReclaim: [
      { name: 'depositIndex', type: 'uint256' },
    ],
  };

  const message = {
    depositIndex: 0,
  };

  const { data, isError, isLoading, isSuccess, signTypedData } =
    useSignTypedData({
      domain,
      message,
      primaryType: 'GaslessReclaim',
      types,
    })

  if (!address) {
    return <div>
      Go nuts!
      <w3m-button />
    </div>
  }
  

  return <div>
    Nuts! Nuts! Nuts! Nuts! Nuts! Nuts! Nuts! Nuts!
    <br/>
    <button disabled={isLoading} onClick={() => signTypedData()}>
        Sign typed data
      </button>
    {data && <div>
      <p>Signature: {data}</p>
      <p>r: {sliceHex(data, 0, 32)}</p>
      <p>s: {sliceHex(data, 32, 64)}</p>
      <p>v: {Number(hexToBigInt(sliceHex(data, 64)))}</p>
    </div>}
      
      {isError && <div>Error signing message</div>}
  </div>
}