import { Code2, Github } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code2 className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by AII Development Community. © {currentYear} AII Developer Guidelines.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/github-axa-usage"
            className="text-sm font-medium underline underline-offset-4"
          >
            GitHub Guide
          </Link>
          <a
            href="https://github.axa.com/aii"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-medium underline underline-offset-4"
          >
            <Github className="h-4 w-4" />
            AII GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
