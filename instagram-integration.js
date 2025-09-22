/**
 * ICE Global Resources - Instagram Integration System
 * Handles Instagram Basic Display API integration for three business accounts
 * @ice_cars_, @ice_luxury___, @ice_properties_
 */

class InstagramIntegration {
    constructor() {
        this.accounts = {
            cars: {
                username: 'ice_cars_',
                accessToken: null, // To be configured
                containerId: 'instagram-cars-feed',
                followUrl: 'https://www.instagram.com/ice_cars_?igsh=NWs0cG51ejAxbG9p'
            },
            luxury: {
                username: 'ice_luxury___',
                accessToken: null, // To be configured
                containerId: 'instagram-luxury-feed',
                followUrl: 'https://www.instagram.com/ice_luxury___/'
            },
            properties: {
                username: 'ice_properties_',
                accessToken: null, // To be configured
                containerId: 'instagram-properties-feed',
                followUrl: 'https://www.instagram.com/ice_properties_/'
            }
        };

        this.apiEndpoint = 'https://graph.instagram.com/me/media';
        this.postsPerLoad = 9;
        this.loadedPosts = {};
        
        // Initialize loaded posts counter for each account
        Object.keys(this.accounts).forEach(account => {
            this.loadedPosts[account] = 0;
        });

        this.init();
    }

    init() {
        // Initialize Instagram feeds when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeFeeds());
        } else {
            this.initializeFeeds();
        }
    }

    initializeFeeds() {
        // Initialize feeds for each account that has a container on the page
        Object.keys(this.accounts).forEach(accountKey => {
            const container = document.getElementById(this.accounts[accountKey].containerId);
            if (container) {
                this.loadInstagramFeed(accountKey);
            }
        });
    }

    async loadInstagramFeed(accountKey, loadMore = false) {
        const account = this.accounts[accountKey];
        const container = document.getElementById(account.containerId);
        
        if (!container) {
            console.warn(`Instagram container not found: ${account.containerId}`);
            return;
        }

        // Show loading state
        if (!loadMore) {
            this.showLoadingState(container);
        }

        try {
            // For now, we'll use a fallback approach with demo data
            // In production, you'll need to implement the Instagram Basic Display API
            const posts = await this.fetchInstagramPosts(accountKey, loadMore);
            
            if (posts && posts.length > 0) {
                this.renderInstagramPosts(container, posts, accountKey, loadMore);
                this.loadedPosts[accountKey] += posts.length;
            } else {
                this.showFallbackContent(container, accountKey);
            }
        } catch (error) {
            console.error(`Error loading Instagram feed for ${accountKey}:`, error);
            this.showFallbackContent(container, accountKey);
        }
    }

    async fetchInstagramPosts(accountKey, loadMore = false) {
        const account = this.accounts[accountKey];
        
        // TODO: Implement Instagram Basic Display API
        // For now, return demo data structure
        return this.getDemoData(accountKey);
    }

    getDemoData(accountKey) {
        // Demo data structure matching Instagram API response
        const demoData = {
            cars: [
                {
                    id: '1',
                    media_type: 'IMAGE',
                    media_url: 'image/home1-optimized.jpg',
                    thumbnail_url: 'image/home1-optimized.jpg',
                    caption: '🚗 New Mercedes-Benz GLE in our showroom! Experience luxury redefined. #ICECarsNigeria #LuxuryCars #Mercedes',
                    permalink: 'https://www.instagram.com/ice_cars_/',
                    timestamp: '2024-01-15T10:30:00+0000'
                },
                {
                    id: '2',
                    media_type: 'IMAGE',
                    media_url: 'image/home4-optimized.jpg',
                    thumbnail_url: 'image/home4-optimized.jpg',
                    caption: '✨ BMW X6 - Where performance meets elegance. Book your test drive today! #ICECarsNigeria #BMW #LuxuryLifestyle',
                    permalink: 'https://www.instagram.com/ice_cars_/',
                    timestamp: '2024-01-14T14:20:00+0000'
                },
                {
                    id: '3',
                    media_type: 'IMAGE',
                    media_url: 'image/home5-optimized.jpg',
                    thumbnail_url: 'image/home5-optimized.jpg',
                    caption: '🔥 Audi Q7 - Engineering excellence at its finest. Available now at ICE Cars! #ICECarsNigeria #Audi #PremiumCars',
                    permalink: 'https://www.instagram.com/ice_cars_/',
                    timestamp: '2024-01-13T16:45:00+0000'
                },
                {
                    id: '4',
                    media_type: 'VIDEO',
                    media_url: 'image/video1.mp4',
                    thumbnail_url: 'image/home2.jpg',
                    caption: '🎬 Take a virtual tour of our latest luxury collection! Which one catches your eye? #ICECarsNigeria #LuxuryCars',
                    permalink: 'https://www.instagram.com/ice_cars_/',
                    timestamp: '2024-01-12T12:00:00+0000'
                },
                {
                    id: '5',
                    media_type: 'IMAGE',
                    media_url: 'image/home3.jpg',
                    thumbnail_url: 'image/home3.jpg',
                    caption: '💎 Porsche Cayenne - Unleash your inner drive. Experience the thrill! #ICECarsNigeria #Porsche #SportsCars',
                    permalink: 'https://www.instagram.com/ice_cars_/',
                    timestamp: '2024-01-11T09:15:00+0000'
                },
                {
                    id: '6',
                    media_type: 'IMAGE',
                    media_url: 'image/home6.jpg',
                    thumbnail_url: 'image/home6.jpg',
                    caption: '🌟 Range Rover Sport - Commanding presence, unmatched luxury. Visit our showroom! #ICECarsNigeria #RangeRover',
                    permalink: 'https://www.instagram.com/ice_cars_/',
                    timestamp: '2024-01-10T11:30:00+0000'
                }
            ],
            luxury: [
                {
                    id: '7',
                    media_type: 'IMAGE',
                    media_url: 'image/ICELUXURYVIDEO2.mp4',
                    thumbnail_url: 'image/home7.jpg',
                    caption: '👗 New designer collection just arrived! Elevate your style with ICE Luxury. #ICELuxuryNigeria #DesignerFashion #LuxuryStyle',
                    permalink: 'https://www.instagram.com/ice_luxury___/',
                    timestamp: '2024-01-15T13:20:00+0000'
                },
                {
                    id: '8',
                    media_type: 'IMAGE',
                    media_url: 'image/home8.jpg',
                    thumbnail_url: 'image/home8.jpg',
                    caption: '✨ Premium accessories that define elegance. Shop the latest at ICE Luxury! #ICELuxuryNigeria #PremiumAccessories',
                    permalink: 'https://www.instagram.com/ice_luxury___/',
                    timestamp: '2024-01-14T15:45:00+0000'
                },
                {
                    id: '9',
                    media_type: 'IMAGE',
                    media_url: 'image/about1-optimized.png',
                    thumbnail_url: 'image/about1-optimized.png',
                    caption: '🔥 High-end fashion meets Nigerian elegance. Discover your perfect look! #ICELuxuryNigeria #HighEndFashion',
                    permalink: 'https://www.instagram.com/ice_luxury___/',
                    timestamp: '2024-01-13T10:00:00+0000'
                }
            ],
            properties: [
                {
                    id: '10',
                    media_type: 'IMAGE',
                    media_url: 'image/about-optimized.png',
                    thumbnail_url: 'image/about-optimized.png',
                    caption: '🏠 Premium properties in the heart of Abuja. Your dream home awaits! #ICEPropertiesNigeria #LuxuryRealEstate #AbujaProperties',
                    permalink: 'https://www.instagram.com/ice_properties_/',
                    timestamp: '2024-01-15T08:30:00+0000'
                },
                {
                    id: '11',
                    media_type: 'IMAGE',
                    media_url: 'image/part3.png',
                    thumbnail_url: 'image/part3.png',
                    caption: '🌟 Exclusive residential developments with world-class amenities. #ICEPropertiesNigeria #PremiumHomes',
                    permalink: 'https://www.instagram.com/ice_properties_/',
                    timestamp: '2024-01-14T12:15:00+0000'
                }
            ]
        };

        return demoData[accountKey] || [];
    }

    renderInstagramPosts(container, posts, accountKey, loadMore = false) {
        const account = this.accounts[accountKey];
        
        if (!loadMore) {
            container.innerHTML = '';
        }

        // Create or get the posts grid
        let postsGrid = container.querySelector('.instagram-posts-grid');
        if (!postsGrid) {
            postsGrid = document.createElement('div');
            postsGrid.className = 'instagram-posts-grid';
            container.appendChild(postsGrid);
        }

        // Render each post
        posts.forEach(post => {
            const postElement = this.createPostElement(post, accountKey);
            postsGrid.appendChild(postElement);
        });

        // Add load more button if needed
        this.addLoadMoreButton(container, accountKey);

        // Add follow button
        this.addFollowButton(container, account);
    }

    createPostElement(post, accountKey) {
        const postDiv = document.createElement('div');
        postDiv.className = 'instagram-post';
        postDiv.setAttribute('data-post-id', post.id);

        const isVideo = post.media_type === 'VIDEO';
        const mediaUrl = post.thumbnail_url || post.media_url;

        postDiv.innerHTML = `
            <div class="instagram-post-media">
                ${isVideo ? 
                    `<div class="video-indicator"><i class="fa fa-play"></i></div>` : 
                    ''
                }
                <img src="${mediaUrl}" alt="Instagram post" loading="lazy">
                <div class="instagram-post-overlay">
                    <div class="post-overlay-content">
                        <p class="post-caption">${this.truncateCaption(post.caption)}</p>
                        <div class="post-actions">
                            <a href="${post.permalink}" target="_blank" rel="noopener noreferrer" class="view-on-instagram">
                                <i class="fa fa-instagram"></i> View on Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add click handler
        postDiv.addEventListener('click', () => {
            window.open(post.permalink, '_blank', 'noopener,noreferrer');
        });

        return postDiv;
    }

    addLoadMoreButton(container, accountKey) {
        // Remove existing load more button
        const existingButton = container.querySelector('.load-more-instagram');
        if (existingButton) {
            existingButton.remove();
        }

        // Add new load more button
        const loadMoreButton = document.createElement('button');
        loadMoreButton.className = 'load-more-instagram btn-gold';
        loadMoreButton.innerHTML = '<i class="fa fa-plus"></i> Load More Posts';
        
        loadMoreButton.addEventListener('click', () => {
            loadMoreButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
            this.loadInstagramFeed(accountKey, true);
        });

        container.appendChild(loadMoreButton);
    }

    addFollowButton(container, account) {
        // Check if follow button already exists
        if (container.querySelector('.instagram-follow-button')) {
            return;
        }

        const followButton = document.createElement('a');
        followButton.className = 'instagram-follow-button btn-gold';
        followButton.href = account.followUrl;
        followButton.target = '_blank';
        followButton.rel = 'noopener noreferrer';
        followButton.innerHTML = `<i class="fa fa-instagram"></i> Follow @${account.username}`;

        container.appendChild(followButton);
    }

    showLoadingState(container) {
        container.innerHTML = `
            <div class="instagram-loading">
                <div class="loading-spinner"></div>
                <p>Loading Instagram posts...</p>
            </div>
        `;
    }

    showFallbackContent(container, accountKey) {
        const account = this.accounts[accountKey];
        container.innerHTML = `
            <div class="instagram-fallback">
                <div class="fallback-content">
                    <i class="fa fa-instagram"></i>
                    <h3>Follow us on Instagram</h3>
                    <p>Stay updated with our latest posts and stories!</p>
                    <a href="${account.followUrl}" target="_blank" rel="noopener noreferrer" class="btn-gold">
                        <i class="fa fa-instagram"></i> Follow @${account.username}
                    </a>
                </div>
            </div>
        `;
    }

    truncateCaption(caption, maxLength = 100) {
        if (!caption) return '';
        return caption.length > maxLength ? 
            caption.substring(0, maxLength) + '...' : 
            caption;
    }

    // Method to refresh feeds (useful for periodic updates)
    refreshAllFeeds() {
        Object.keys(this.accounts).forEach(accountKey => {
            const container = document.getElementById(this.accounts[accountKey].containerId);
            if (container) {
                this.loadedPosts[accountKey] = 0;
                this.loadInstagramFeed(accountKey);
            }
        });
    }

    // Method to configure access tokens (for production use)
    setAccessToken(accountKey, token) {
        if (this.accounts[accountKey]) {
            this.accounts[accountKey].accessToken = token;
        }
    }
}

// Initialize Instagram integration when script loads
const instagramIntegration = new InstagramIntegration();

// Make it globally available
window.InstagramIntegration = InstagramIntegration;
window.instagramIntegration = instagramIntegration;
