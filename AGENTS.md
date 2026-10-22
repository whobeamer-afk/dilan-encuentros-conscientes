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
- Dra. Dilán demo site: frontend-only demo (booking, contact and course-signup forms show success states client-side; no backend). Images are CDN assets via src/assets/*.asset.json pointers (not local binaries). Fonts loaded via <link> in __root head.
