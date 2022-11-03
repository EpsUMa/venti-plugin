import plugin from '../../lib/plugins/plugin.js'
import { segment } from 'oicq'
export class Validation extends plugin {
    constructor() {
        super({
            name: '加群验证',
            dsc: '使用qq.alioth.zone or qq.ustc.life进行加群验证',
            event: 'request.group.add',
            priority: 5000
        })
    }
    async accept() {
        let uid = this.e.user_id;
        await this.e.approve(true)
    }
}