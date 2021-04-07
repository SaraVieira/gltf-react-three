import { useState } from 'react'
import Tippy from '@tippyjs/react'
import copy from 'clipboard-copy'
import 'tippy.js/dist/tippy.css'
import useSandbox from '../lib/utils/useSandbox'
import { CodesandboxIcon, CopyIcon } from './icons'
import Toggle from './toggle'

const Nav = ({ code, types, setTypes, fileName, textOriginalFile }) => {
  const [copied, setCopied] = useState(false)
  const sandboxId = useSandbox({ fileName, textOriginalFile, code })

  const copyToClipboard = async () => {
    try {
      await copy(code)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 200)
      // eslint-disable-next-line no-empty
    } catch {}
  }

  return (
    <nav className="p-10 flex justify-end align-center">
      <ul className="flex justify-end align-center">
        <li className={`" hover:text-green-600 pr-5`}>
          <Toggle onToggle={setTypes} active={types} />
        </li>

        <li className={`${!copied ? 'text-gray-900' : 'text-green-600'} hover:text-green-600 pr-5`}>
          <Tippy content={copied ? 'Copied' : 'Copy to Clipboard'}>
            <button className="cursor-pointer" onClick={copyToClipboard}>
              <CopyIcon />
            </button>
          </Tippy>
        </li>
        {sandboxId ? (
          <li className={`text-gray-900 hover:text-green-600`}>
            <Tippy content={'Open in Codesandbox'}>
              <a
                className="cursor-pointer"
                rel="noreferrer"
                href={`https://codesandbox.io/s/${sandboxId}`}
                target="_blank">
                <CodesandboxIcon />
              </a>
            </Tippy>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

export default Nav
