import { QRCodeCanvas } from 'qrcode.react'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { SectionContainer } from './styles'

export function QrCode() {
  const [url, setUrl] = useState('')
  const qrRef = useRef<HTMLDivElement>(null)

  function downloadQRCode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (qrRef && qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas')
      if (canvas) {
        const image = canvas.toDataURL('image/png')
        const anchor = document.createElement('a')
        anchor.href = image
        anchor.download = 'qr-code.png'
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
        setUrl('')
      }
    }
  }

  function qrCodeEncoder(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value)
  }

  const qrcode = <QRCodeCanvas id="qrCode" value={url} size={300} level={'H'} />

  return (
    <SectionContainer>
      <div className="qrcode_container">
        <div ref={qrRef}>{qrcode}</div>
        <div className="input_group">
          <form onSubmit={downloadQRCode}>
            <label>Digite a URL:</label>
            <input
              type="url"
              value={url}
              onChange={qrCodeEncoder}
              placeholder="https://www.google.com"
            />
            <button type="submit" disabled={!url}>
              Download QR Code
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  )
}
