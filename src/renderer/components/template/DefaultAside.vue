<template>
  <b-tabs>
    <b-tab>
      <template slot="title">
        <i class='icon-list'></i>
      </template>
      <b-list-group class="list-group-accent">
        <b-list-group-item class="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          Today
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-warning list-group-item-divider">
          <div>Meeting with
            <strong>Lucas</strong>
          </div>
          <small class="text-muted mr-3">
            <i class="icon-calendar"></i>&nbsp;&nbsp;1 - 3pm
          </small>
          <small class="text-muted">
            <i class="icon-location-pin"></i>&nbsp;&nbsp;Palo Alto, CA
          </small>
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-info">
          <div>Skype with <strong>Megan</strong>
          </div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp;&nbsp;4 - 5pm</small>
          <small class="text-muted"><i class="icon-social-skype"></i>&nbsp;&nbsp;On-line</small>
        </b-list-group-item>
        <hr class="transparent mx-3 my-0">
        <b-list-group-item class="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          Tomorrow
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-danger list-group-item-divider">
          <div>New UI Project - <strong>deadline</strong>
          </div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp;&nbsp;10 - 11pm</small>
          <small class="text-muted"><i class="icon-home"></i>&nbsp;&nbsp;creativeLabs HQ</small>
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-success list-group-item-divider">
          <div><strong>#10 Startups.Garden</strong> Meetup</div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>
          <small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>
        </b-list-group-item>
        <b-list-group-item href="#" class="list-group-item-accent-primary list-group-item-divider">
          <div><strong>Team meeting</strong></div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 4 - 6pm</small>
          <small class="text-muted"><i class="icon-home"></i>&nbsp; creativeLabs HQ</small>
        </b-list-group-item>
      </b-list-group>
    </b-tab>
  </b-tabs>
</template>

<script>
import { Switch as cSwitch } from '@coreui/vue'
export default {
  name: 'DefaultAside',
  components: {
    cSwitch
  }
}
</script>
