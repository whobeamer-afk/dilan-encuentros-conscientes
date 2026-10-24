<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Site decisions
- Dra. Dilán demo site: frontend-only demo (contact form shows success state client-side; no backend; no booking calendar). Images are CDN assets via src/assets/*.asset.json pointers (not local binaries). Fonts loaded via <link> in __root head.
- Only the 2026 professional photo set (DSC015xx: dilan-hero-2026, dilan-plants, dilan-seated, dilan-glasses, dilan-table, dilan-lap, dilan-reading) and the psicoanalizar-seal.png logo may be used on the site, including favicon. The old screen-capture photos and old badge were removed by client request and must not reappear.
- Brand: nav wordmark is the text "PSICOANALIZAR" (letterspaced serif); the seal is used in the footer. Hero uses a tight face crop of DSC01510 with a CSS ivory fade over its left edge (no image regeneration of client photos).
