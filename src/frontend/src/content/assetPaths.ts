/**
 * Centralized asset path constants for portfolio headshots.
 * Uses the uploaded headshot directly from /assets/uploads/.
 * Version query string enables cache-busting when headshots are updated.
 */

const HEADSHOT_VERSION = "6"; // Bump this version to force browser cache refresh

export const HEADSHOT_512 = `/assets/uploads/Profile-picture-2-5-1.png?v=${HEADSHOT_VERSION}`;
export const HEADSHOT_1280 = `/assets/uploads/Profile-picture-2-5-1.png?v=${HEADSHOT_VERSION}`;
