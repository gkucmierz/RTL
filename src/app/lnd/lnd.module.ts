import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LNDRouting } from './lnd.routing';
import { SharedModule } from '../shared/shared.module';

import { LNDRootComponent } from './lnd-root.component';
import { HomeComponent } from './home/home.component';
import { PeersChannelsComponent } from './peers-channels/peers-channels.component';
import { ChannelsTablesComponent } from './peers-channels/channels/channels-tables/channels-tables.component';
import { PeersComponent } from './peers-channels/peers/peers.component';
import { LightningInvoicesComponent } from './transactions/invoices/lightning-invoices.component';
import { OnChainSendComponent } from './on-chain/on-chain-send/on-chain-send.component';
import { OnChainReceiveComponent } from './on-chain/on-chain-receive/on-chain-receive.component';
import { OnChainComponent } from './on-chain/on-chain.component';
import { OnChainTransactionHistoryComponent } from './on-chain/on-chain-transaction-history/on-chain-transaction-history.component';
import { WalletComponent } from './wallet/wallet.component';
import { LightningPaymentsComponent } from './transactions/payments/lightning-payments.component';
import { ChannelManageComponent } from './peers-channels/channels/channel-manage/channel-manage.component';
import { ChannelPendingTableComponent } from './peers-channels/channels/channels-tables/channel-pending-table/channel-pending-table.component';
import { ChannelClosedTableComponent } from './peers-channels/channels/channels-tables/channel-closed-table/channel-closed-table.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LookupsComponent } from './lookups/lookups.component';
import { RoutingComponent } from './routing/routing.component';
import { ForwardingHistoryComponent } from './routing/forwarding-history/forwarding-history.component';
import { RoutingPeersComponent } from './routing/routing-peers/routing-peers.component';
import { ChannelLookupComponent } from './lookups/channel-lookup/channel-lookup.component';
import { NodeLookupComponent } from './lookups/node-lookup/node-lookup.component';
import { ChannelBackupTableComponent } from './peers-channels/channels/channels-tables/channel-backup-table/channel-backup-table.component';
import { ChannelRestoreTableComponent } from './peers-channels/channels/channels-tables/channel-restore-table/channel-restore-table.component';
import { QueryRoutesComponent } from './transactions/query-routes/query-routes.component';

import { LoggerService, ConsoleLoggerService } from '../shared/services/logger.service';
import { LNDUnlockedGuard } from '../shared/services/auth.guard';
import { ChannelOpenTableComponent } from './peers-channels/channels/channels-tables/channel-open-table/channel-open-table.component';
import { UnlockWalletComponent } from './wallet/unlock/unlock.component';
import { InitializeWalletComponent } from './wallet/initialize/initialize.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LNDRouting
  ],
  declarations: [
    LNDRootComponent,
    HomeComponent,
    PeersComponent,
    PeersChannelsComponent,
    LightningInvoicesComponent,
    WalletComponent,
    LightningPaymentsComponent,
    ChannelManageComponent,
    ChannelPendingTableComponent,
    ChannelClosedTableComponent,
    TransactionsComponent,
    LookupsComponent,
    RoutingComponent,
    ForwardingHistoryComponent,
    RoutingPeersComponent,
    ChannelLookupComponent,
    NodeLookupComponent,
    ChannelBackupTableComponent,
    QueryRoutesComponent,
    ChannelRestoreTableComponent,
    OnChainSendComponent,
    OnChainReceiveComponent,
    OnChainComponent,
    OnChainTransactionHistoryComponent,
    ChannelsTablesComponent,
    ChannelOpenTableComponent,
    UnlockWalletComponent,
    InitializeWalletComponent
  ],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService },
    LNDUnlockedGuard
  ],
  bootstrap: [LNDRootComponent]
})
export class LNDModule {}
