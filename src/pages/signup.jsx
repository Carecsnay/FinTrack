import { Link } from 'react-router'

import PasswordInput from '../components/password-input'
import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Input } from '../components/ui/input'

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Crie a sua conta</CardTitle>
          <CardDescription>Insira os seus dados abaixo.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Digite o seu nome" />
            <Input placeholder="Digite o seu sobrenome" />
            <Input type="email" placeholder="Digite o seu e-mail" />
            <PasswordInput placeholder={'Digite uma senha'} />
            <PasswordInput placeholder={'Digite novamente a senha'} />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Criar conta
          </Button>
          <Button variant="outline" className="w-full">
            Login com o Google
          </Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center">
        <p className="text-center text-gray-500">Já possui uma conta?</p>
        <Button variant="link" href="/login" asChild>
          <Link to="/login">Faça login</Link>
        </Button>
      </div>
    </div>
  )
}

export default SignUpPage
