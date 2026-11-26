import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'

const PasswordInput = ({ placeholder }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  return (
    <div className="relative flex items-center justify-between">
      <Input
        type={passwordIsVisible ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <Button
        variant={'ghost'}
        className="absolute bottom-0 right-0 top-0 my-auto h-8 w-8 text-muted-foreground"
        onClick={() => setPasswordIsVisible((prev) => !prev)}
      >
        {passwordIsVisible ? <EyeOffIcon /> : <EyeIcon />}
      </Button>
    </div>
  )
}

export default PasswordInput
