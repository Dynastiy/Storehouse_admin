import Vue from 'vue'
import Router from 'vue-router'
import overview from '@/components/dashboard/wrapper/overview.vue'
import subscriptionMetrics from '@/components/dashboard/wrapper/analytics/subscriptionMetrics.vue'
import transactionMetrics from '@/components/dashboard/wrapper/analytics/transactionMetrics.vue'
import vendorsList from '@/components/dashboard/wrapper/vendorsList.vue'
import customerList from '@/components/dashboard/wrapper/customerList.vue'
import vendorVerification from '@/components/dashboard/wrapper/vendorVerification.vue'
import subscriptionActivation from '@/components/dashboard/wrapper/subscriptionActivation.vue'
import superUser from '@/components/dashboard/wrapper/superUser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
    {path: '/', component: overview},
    {path: '/subscriptionMetrics', component: subscriptionMetrics},
    {path: '/transactionMetrics', component: transactionMetrics},
    {path: '/vendorsList', component: vendorsList},
    {path: '/customerList', component: customerList},
    {path: '/vendorVerification', component: vendorVerification},
    {path: '/subscriptionActivation', component: subscriptionActivation},
    {path: '/superUser', component: superUser}
  ]
})
