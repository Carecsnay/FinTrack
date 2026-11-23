import { Link } from 'react-router'

const HomePage = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center text-lg">
        <Link to="/signup">CRIAR CONTA</Link>
      </div>
    </>
  )
}

export default HomePage
