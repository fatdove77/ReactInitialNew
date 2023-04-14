import React from 'react'

import { useWeb3Hook } from '../hooks/useWeb3Hook'
import { Button, Space } from 'antd';
import { useBalance } from '../hooks/static';
import {NETWORK}  from '../BC_config/netConfig'
import { motion } from "framer-motion"
import { Outlet } from 'react-router-dom';
function Home() {
  const {isConnect,isLoading,Connect,Disconnect,account} = useWeb3Hook();
  const {fibo,usdt} = useBalance();
  console.log(1);
  return (
    <motion.div 
      className ="container"
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      exit = {{opacity:1}}
    >
      <Button
        loading={isLoading}
        onClick = {()=>Connect()}
      >{
        isConnect
        ?'查看钱包'
        :'连接钱包'
      }</Button>
      <Button
      onClick = {()=>Disconnect()}
      >
        退出钱包
      </Button>
      <div>
        USDT:{usdt} FIBO:{fibo}
      </div>
      <Outlet></Outlet>
    </motion.div>
  )
}

export default Home