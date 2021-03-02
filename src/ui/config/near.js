export const near = {
  multisigFactory: {
    contractId: 'dev-1612259671980-4872321',
    methods: {
      viewMethods: [],
      changeMethods: ['create'],
    },
  },
  multisig: {
    methods: {
      viewMethods: ['get_members', 'get_request', 'get_num_confirmations', 'list_request_ids'],
      changeMethods: ['add_request', 'confirm', 'delete_request'],
    },
  },
};