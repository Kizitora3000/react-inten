"use client"
import { useLocation } from 'react-router-dom';

export default function Header() {
  const router = useRouter();
  const currentURL = router.asPath;
  return (
    <>
      <h1>INTEN</h1><a href="">{currentURL}</a><a>a</a>
    </>
  )
}