import React, { useState, useEffect } from 'react'
import ConnectWallet from './components/ConnectWallet'
import RoleBoxes from './components/RoleBoxes'

export default function App() {
  const [account, setAccount] = useState(null)

  useEffect(() => {
    if (window.ethereum) {
      const handler = (accounts) => {
        setAccount(accounts.length ? accounts[0] : null)
      }
      window.ethereum.on('accountsChanged', handler)
      return () => window.ethereum.removeListener('accountsChanged', handler)
    }
  }, [])

  const handleConnect = (address) => {
    setAccount(address)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>SkillPassport</h1>
      </header>
      <main className="main">
        {!account ? (
          <ConnectWallet onConnect={handleConnect} />
        ) : (
          <section>
            <p className="connected">Connected: {account}</p>
            <RoleBoxes />
          </section>
        )}
      </main>
    </div>
  )
}
