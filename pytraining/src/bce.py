# -*- coding: utf-8 -*-
#
# (c) 2013-2018 Wishtack
#
# $Id: $
#


class CurrencyInfo(object):

    def __init__(self):
        self.rate = None
        self.symbol = None


class Bce(object):

    def get_currency_info(self, currency):
        raise NotImplementedError()

