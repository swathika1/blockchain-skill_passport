import React from 'react'
import { ethers } from 'ethers'

export default function ConnectWallet({ onConnect }) {
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  async function connect() {
    setError(null)
    setLoading(true)
    try {
      if (!window.ethereum) throw new Error('MetaMask not detected. Please install MetaMask extension.')
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      // ethers v6 BrowserProvider
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const address = await signer.getAddress()
      onConnect(address)
    } catch (err) {
      setError(err?.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="connect-container">
      <h2>Login with MetaMask</h2>
      <p>Connect your wallet to continue to SkillPassport.</p>
      <button className="btn" onClick={connect} disabled={loading}>
        {loading ? 'Connecting...' : 'Connect MetaMask'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  )
}
