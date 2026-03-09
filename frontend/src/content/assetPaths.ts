/**
 * Centralized asset path constants for portfolio headshots.
 * These paths reference static assets under /assets/generated/.
 * Version query string enables cache-busting when headshots are updated.
 */

const HEADSHOT_VERSION = '5'; // Bump this version to force browser cache refresh

export const HEADSHOT_512 = `/assets/generated/portfolio-headshot.dim_512x512.png?v=${HEADSHOT_VERSION}`;
export const HEADSHOT_1280 = `/assets/generated/portfolio-headshot-large.dim_1280x1280.png?v=${HEADSHOT_VERSION}`;
