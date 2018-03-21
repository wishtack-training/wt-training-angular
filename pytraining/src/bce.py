# -*- coding: utf-8 -*-
#
# (c) 2013-2018 Wishtack
#
# $Id: $
#


class CurrencyInfo(object):

    def __init__(self, rate, symbol):
        self.rate = rate
        self.symbol = symbol


class Bce(object):

    def get_currency_info(self, currency):
        raise NotImplementedError()

