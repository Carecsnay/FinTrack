import { Link } from 'react-router'
import { z } from 'zod'

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
import { Checkbox } from '../components/ui/checkbox'
import { Input } from '../components/ui/input'

// eslint-disable-next-line no-unused-vars
const signUpSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'O nome é obrigatório.' }),
  lastName: z.string().trim().min(1, { message: 'O sobrenome é obrigatório.' }),
  email: z
    .string()
    .trim()
    .email({
      message: 'O e-mail é inválido.',
    })
    .trim()
    .min(1, { message: 'O e-mail é obrigatório.' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'A senha deve conter pelo menos 8 caracteres.' }),
  passwordConfirmation: z.string().trim().min(1, {
    message: 'A confirmação de senha é obrigatória.',
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: 'Você deve aceitar os termos para criar uma conta.',
  }),
})

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
          <div className="items-top flex space-x-2">
            <Checkbox id="terms" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-xs text-muted-foreground opacity-75"
              >
                Ao clicar em “Criar conta”, você aceita{' '}
                <a href="#" className="text-white underline">
                  nosso termo de uso e política de privacidade.
                </a>
              </label>
            </div>
          </div>
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
