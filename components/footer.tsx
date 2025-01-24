import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-secondary/20 mt-auto">
      <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">&copy; 2024 PortfolioMaker. All rights reserved.</p>
        <nav className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  )
}

