import { BaseEngine, EventOptions, ViewOptions } from './analytics';
export declare class DiscordAnalytics extends BaseEngine {
    view(page: string, options: ViewOptions): Promise<void>;
    event(options?: EventOptions): Promise<void>;
}
