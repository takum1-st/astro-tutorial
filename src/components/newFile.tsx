import { platform, username } from "./Footer.astro";

<Fragment>
<footer>
<p>私のプロジェクトについて詳しくは<a href={`https://www.${platform}.com/${username}`}>{platform}</a>をご確認ください！</p>
</footer>
</Fragment>;
